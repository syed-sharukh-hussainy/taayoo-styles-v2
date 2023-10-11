import { useBoundStore } from '@/store/useBoundStore';
import dynamic from 'next/dynamic';

const ReactCodeEditor = dynamic(() => import('./react-code-editor'), {
  ssr: false,
});

const EditorTopBar = dynamic(() => import('./editor-top-bar'), { ssr: false });

const CustomEditor = () => {
  const frameWidth = useBoundStore((state) => state.frameWidth);
  const boxShadow = useBoundStore((state) => state.shadow.value);
  const showTopBar = useBoundStore((state) => state.showWindowHeader);

  return (
    <section
      className="relative rounded-lg transiton duration-300 ease-in-out"
      style={{
        width: `${frameWidth}px`,
        boxShadow,
      }}
    >
      {showTopBar && <EditorTopBar />}
      <ReactCodeEditor />
    </section>
  );
};

export default CustomEditor;
