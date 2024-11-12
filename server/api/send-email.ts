import nodemailer from "nodemailer";
import type { ContactFormData } from "~/types";

export default defineEventHandler(
  async (event): Promise<{ success: boolean }> => {
    const body = await readBody<ContactFormData>(event);

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Вебсайт - Адвокат Олександр Кравчук <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_TARGET,
      subject: "Форма зворотнього зв'язку",
      html: `
      <p>Ім'я: ${name}</p>
      <p>Пошта: ${email}</p>
      <p>Повідомлення: ${message}</p>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  },
);
