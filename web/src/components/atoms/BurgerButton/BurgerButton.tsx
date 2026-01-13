interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {

  return (
    <button 
      onClick={onClick}
      type="button" 
      className="app__navbar-toggler md:hidden"
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <svg className='fill-current text-[var(--text-color)]' width="30" height="30">
          <use xlinkHref="#icon-c-close-light" />
        </svg>
      ) : (
        <svg className='fill-current text-[var(--text-color)]' width="30" height="30">
          <use xlinkHref="#icon-c-menu" />
        </svg>
      )}
    </button>
  );
};

export default BurgerButton;