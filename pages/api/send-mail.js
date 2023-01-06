import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  console.log(req.body);
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const htmlData = `<div style=" width: 400px; text-align: left">
      <h2>New Contact</h4>
      <p style="color: #4b5563">Name: <span style="color:#1f2937">${name}</span></p>
      <p style="color: #4b5563">Email: <span style="color:#1f2937">${email}</span></p>
      <p style="color: #4b5563; margin-bottom: 25px">Message: <span style="color:#1f2937">${message}</span></p>
      
    </div>`;

  switch (req.method) {
    case "POST":
      // Send email
      const msg = {
        to: "outsource.innovations@gmail.com",
        from: "bonafide@radish.world",
        subject: "New message from Erivan",
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
