import { ContactForm } from '@/components/ContactForm/ContactForm';

const Page = () => {
  return (
    <div
      style={{ backgroundImage:'url(/form-bg1.jpg)' }}
      className="w-screen h-screen flex flex-col  items-center justify-center bg-center bg-cover"
    >
      <div
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl "
      >
        <div className="absolute left-0 sm:left-20 bottom-16 w-[100%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
