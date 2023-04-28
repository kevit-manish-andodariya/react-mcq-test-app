const Menu = (props: any) => {
  return (
    <svg
      className="svg-icon menu-icon"
      style={{
        width: props.size,
        height: props.size,
        verticalAlign: "middle",
        fill: props.fill,
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M853.333333 938.666667h-213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333334v-213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h213.333333c46.933333 0 85.333333 38.4 85.333334 85.333333v213.333333c0 46.933333-38.4 85.333333-85.333334 85.333334z m0-469.333334h-213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V170.666667c0-46.933333 38.4-85.333333 85.333333-85.333334h213.333333c46.933333 0 85.333333 38.4 85.333334 85.333334v213.333333c0 46.933333-38.4 85.333333-85.333334 85.333333zM384 938.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334v-213.333333c0-46.933333 38.4-85.333333 85.333334-85.333333h213.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v213.333333c0 46.933333-38.4 85.333333-85.333333 85.333334z m0-469.333334H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V170.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h213.333333c46.933333 0 85.333333 38.4 85.333333 85.333334v213.333333c0 46.933333-38.4 85.333333-85.333333 85.333333z" />
    </svg>
  );
};

export default Menu;
