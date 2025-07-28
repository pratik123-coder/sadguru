import { Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full bg-gray-100 py-6 px-8 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { number: "+91 7381000504" },
            { number: "+91 7381000505" },
          ].map((item, index) => (
            <a
              key={index}
              href={`tel:${item.number.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">{item.number}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
