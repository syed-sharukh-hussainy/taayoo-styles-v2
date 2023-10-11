const MobileEditorMessage = () => {
  return (
    <section className="md:hidden text-center h-screen w-full flex items-center justify-center px-5">
      <p className="text-lg font-bold">
        This Editor is exclusively designed for desktop use, as generating code
        screenshots on a small-screen device would be impractical.
      </p>
    </section>
  );
};

export default MobileEditorMessage;
