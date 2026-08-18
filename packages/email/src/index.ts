import nodemailer from "nodemailer";

export interface EmailConfig {
  host: string;
  port: number;
  from: string;
}

export function createLocalTransport(config: EmailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
  });
}

export async function checkEmailTransport(config: EmailConfig): Promise<boolean> {
  const transport = createLocalTransport(config);
  await transport.verify();
  return true;
}
