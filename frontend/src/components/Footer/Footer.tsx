import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-10 gap-2">
      <span className="text-xs text-footer">Made with</span>
      <div className="relative w-9 h-4 object-contain">
        <Image alt="LOVE" src="/footer-love.png" fill />
      </div>
    </div>
  );
};

export default Footer;
