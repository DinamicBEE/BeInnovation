import { MX, US, CO } from "country-flag-icons/react/3x2";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import "./layout.css";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">EMPRESA</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://www.linkedin.com/company/beexponential/posts/?feedView=all" target="_blank"><CiLinkedin size={24} /> Be Exponential</a></li>
              <li><a href="https://www.linkedin.com/company/dinamic-software/posts/?feedView=all" target="_blank"><CiLinkedin size={24} /> Dinamic Software</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/BeInnovation_4.png" alt="Be Innovate" width={250} height={90} />
            <div className="flex flex-col items-center mt-2">
                <h1 className="text-center text-xs text-gray-600">© 2026 EMPRESA. All rights reserved.</h1>
                <div>
                    <a href="/privacy" className="text-xs text-gray-600 hover:text-gray-900">Privacy Policy</a> | <a href="/terms" className="text-xs text-gray-600 hover:text-gray-900">Terms of Service</a>
                </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><US title="United States" /> Email: info@empresa.com</li>
              <li><MX title="México" /> Email: info@empresa.com</li>
              <li><CO title="Colombia" /> Email: info@empresa.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
