import Link from "next/link";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type PrivacyNoticeProps = {
  variant?: "default" | "security" | "career";
  className?: string;
};

const copy = {
  default:
    "Keystone uses this information only to respond to your inquiry, qualify the request, and coordinate follow-up with the right cybersecurity team.",
  security:
    "Incident reports are treated as confidential security-sensitive information. Do not submit passwords, private keys, secrets, or unnecessary personal data in this form.",
  career:
    "CVs and application data are used only for recruitment evaluation, interview coordination, and lawful retention related to Keystone opportunities.",
};

export function PrivacyNotice({ variant = "default", className }: PrivacyNoticeProps) {
  const isSecurity = variant === "security";
  const Icon = isSecurity ? AlertTriangle : ShieldCheck;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 text-xs leading-relaxed",
        isSecurity
          ? "border-amber-200 bg-amber-50 text-amber-900"
          : "border-zinc-200 bg-zinc-50 text-zinc-600",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={cn("mt-0.5 h-4 w-4 shrink-0", isSecurity ? "text-amber-600" : "text-red-600")}
          aria-hidden="true"
        />
        <p>
          {copy[variant]} Read the{" "}
          <Link href="/privacy" className="font-bold text-red-600 underline underline-offset-2 hover:text-red-700">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
