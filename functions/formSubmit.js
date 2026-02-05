import { AwsClient } from "aws4fetch";

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Parse form data
    const data = await request.json();

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: data["cf-turnstile-response"],
        }),
      },
    );
    const turnstileResult = await turnstileResponse.json();

    console.log("Turnstile Response Log:", turnstileResult);

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ message: "Please complete captcha." }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    const formDataWithoutTurnstile = { ...data };
    delete formDataWithoutTurnstile["cf-turnstile-response"];

    // Save form data to KV (excluding Turnstile response)
    await env.FORM_SUBMISSIONS.put(
      Date.now().toString(),
      JSON.stringify(formDataWithoutTurnstile),
    );

    const aws = new AwsClient({
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      service: "ses",
      region: env.AWS_REGION,
    });

    // Prepare SES request params
    const params = new URLSearchParams({
      Action: "SendEmail",
      Source: `Best Quote Commercial Finance <${env.SENDER_ADDRESS}>`,
      "Destination.ToAddresses.member.1": env.RECIPIENT_ADDRESS,
      "Message.Subject.Data": "New Form Submission!",
      "Message.Subject.Charset": "UTF-8",
      "Message.Body.Text.Data": `You have a new form submission for Best Quote Commercial Finance:\n\n${JSON.stringify(formDataWithoutTurnstile, null, 2)}`,
      "Message.Body.Text.Charset": "UTF-8",
    });

    if (env.BCC_ADDRESS?.trim()) {
      params.append(
        "Destination.BccAddresses.member.1",
        env.BCC_ADDRESS.trim(),
      );
    }

    const queryString = params.toString();

    const sesUrl = `https://email.${env.AWS_REGION}.amazonaws.com/`;
    const awsRes = await aws.fetch(sesUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: queryString,
    });

    const respText = await awsRes.text();
    console.log("AWS Response:", respText);
    if (!awsRes.ok) {
      throw new Error(`Failed to send email: ${awsRes.statusText}`);
    }

    return new Response(
      JSON.stringify({
        redirect: "/thank-you",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error in SES Request:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing your request.",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
}
