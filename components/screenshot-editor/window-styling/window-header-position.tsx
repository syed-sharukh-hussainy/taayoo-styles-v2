import { useBoundStore } from '@/store/useBoundStore';

const WindowHeaderPosition = () => {
  const setTopBarPosition = useBoundStore((state) => state.setTopBarPosition);
  return (
    <section className="w-full flex justify-between item-center text-center ">
      <button
        onClick={() => setTopBarPosition('start')}
        className="flex-1 p-2 border cursor-pointer transition duration-200 hover:bg-muted rounded-tl-lg rounded-bl-lg text-sm font-bold"
      >
        Left
      </button>
      <button
        onClick={() => setTopBarPosition('end')}
        className="flex-1 p-2 border cursor-pointer transition duration-200 hover:bg-muted rounded-tr-lg rounded-br-lg text-sm font-bold"
      >
        Right
      </button>
    </section>
  );
};

export default WindowHeaderPosition;
