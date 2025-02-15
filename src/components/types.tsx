export const Type = (children: { children: string }) => {
  if (children.children === "Fire") {
    return (
      <div className="p-[5px] m-1 bg-red-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Flying") {
    return (
      <div className="p-[5px] m-1 bg-indigo-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Water") {
    return (
      <div className="p-[5px] m-1 bg-blue-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Poison") {
    return (
      <div className="p-[5px] m-1 bg-violet-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Grass") {
    return (
      <div className="p-[5px] m-1 bg-green-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Bug") {
    return (
      <div className="p-[5px] m-1 bg-lime-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Normal") {
    return (
      <div className="p-[5px] m-1 bg-gray-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Electric") {
    return (
      <div className="p-[5px] m-1 bg-yellow-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Ground") {
    return (
      <div className="p-[5px] m-1 bg-yellow-600 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Fairy") {
    return (
      <div className="p-[5px] m-1 bg-pink-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Fighting") {
    return (
      <div className="p-[5px] m-1 bg-orange-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Psychic") {
    return (
      <div className="p-[5px] m-1 bg-fuchsia-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Rock") {
    return (
      <div className="p-[5px] m-1 bg-stone-400 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Steel") {
    return (
      <div className="p-[5px] m-1 bg-slate-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Ice") {
    return (
      <div className="p-[5px] m-1 bg-cyan-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Ghost") {
    return (
      <div className="p-[5px] m-1 bg-purple-300 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Dragon") {
    return (
      <div className="p-[5px] m-1 bg-indigo-400 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  if (children.children === "Dark") {
    return (
      <div className="p-[5px] m-1 bg-zinc-400 rounded-md font-bold">
        {children.children}
      </div>
    );
  }
  return (
    <div className="p-[5px] m-1 rounded-md font-bold">{children.children}</div>
  );
};
