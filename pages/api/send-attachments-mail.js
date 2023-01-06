import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  const { firstName, lastName, phone, email, coverLetterFile, resumeFile } =
    req.body;

  if (!firstName || !phone || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const htmlData = `<div style=" width: 400px; text-align: left">
      <h2>New Application</h4>
      <p style="color: #4b5563">First Name: <span style="color:#1f2937">${firstName}</span></p>
      <p style="color: #4b5563">Last Name: <span style="color:#1f2937">${
        lastName ? lastName : ""
      }</span></p>
      <p style="color: #4b5563">Email: <span style="color:#1f2937">${email}</span></p>
      <p style="color: #4b5563; margin-bottom: 25px">Phone: <span style="color:#1f2937">${phone}</span></p>
      <a href="${coverLetterFile}"
        ><button
          style="
            background-color: #1f2937;
            color: #fff;
            border: none;
            padding: 10px;
            font-weight: 700;
          "
        >
          View Cover Letter
        </button></a
        <a href="${resumeFile}"
        ><button
          style="
            background-color: #1f2937;
            color: #fff;
            border: none;
            padding: 10px;
            font-weight: 700;
            margin-left: 10px;
          "
        >
          View Resume
        </button></a
      >
    </div>`;

  switch (req.method) {
    case "POST":
      // Send email
      // "outsource.innovations@gmail.com"
      const msg = {
        to: "outsource.innovations@gmail.com",
        from: "bonafide@radish.world",
        subject: "New application from Erivan",
        html: htmlData,
      };

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      sgMail.send(msg).then(
        () => {
          console.log("Email sent");
          res.status(200).json({ success: true });
        },
        (error) => {
          console.error(error);
          res.status(400).json({ error: "Something went wrong" });
        }
      );
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
