interface Params {
  label?: string;
  className?: string;
  devClassName?: string;
  onErrorRemove?(error: string): void;
}

const Select = (props: Params) => {
  // TODO: Style dropdown menu

  const errorRemovalHandler = () => {
    if (props.onErrorRemove) props.onErrorRemove("");
  };

  return (
    <div
      className={
        "flex flex-col w-5/6 sm:w-72 md:w-96 2xl:w-[36rem] gap-1" +
        " " +
        props.devClassName
      }
    >
      {props.label && (
        <span className="font-bold text-base 2xl:text-2xl text-left dark:text-white ease-in-out duration-200">
          {props.label}
        </span>
      )}

      <select
        className={
          "px-2 md:px-4 text-lg h-8 rounded-lg 2xl:h-14 2xl:text-3xl bg-white shadow-lg" +
          " " +
          props.className
        }
        name="platform"
        id="platform"
        required
        defaultValue={localStorage.getItem("platform") || "uplay"}
        onChange={() => {
          errorRemovalHandler();
        }}
      >
        <option value="uplay">PC</option>
        <option value="psn">PS4</option>
        <option value="xbl">Xbox</option>
        <option value="switch">Switch</option>
      </select>
    </div>
  );
};

export default Select;
