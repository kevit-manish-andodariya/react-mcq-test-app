import { NavLink, useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import Button from '../../../components/Button/Button';
import BackToPage from '../../BackToPage';
import ROUTE_CONSTANTS_VARIABLE from '../../../constants/routeConstants';
import Company from '../../../assets/images/logos/Company';

type AuthTemplateProps = {
  title: string;
  subTitle?: string;
  authImage: string;
  authImageWidth: string;
  imageTitle?: ReactNode;
  imageSubTitle?: string;
  children: JSX.Element;
  buttonEvent?: () => void;
  buttonText: string;
  redirectText?: string;
  redirectLink?: string;
  redirectLinkText?: string;
  backToPage?: boolean;
};

const AuthTemplate = (props: AuthTemplateProps) => {
  const {
    title,
    subTitle,
    authImage,
    authImageWidth,
    children,
    imageTitle,
    imageSubTitle,
    buttonEvent,
    buttonText,
    redirectText,
    redirectLink,
    redirectLinkText,
    backToPage,
  } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="auth grid grid-lg-6 grid-md-12 h-100">
      <div className="auth_left-side flex-center-15 p-50">
        <div
          className="company-logo cursor-pointer"
          onClick={handleClick}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <Company size="5em" />
        </div>
        <div className="auth_content">
          <div className="auth_user-info">
            <h1 className="text-primary">{title}</h1>
            <p className="text-secondary">{subTitle}</p>
          </div>
          {children}
          <Button
            color="primary"
            variant="contained"
            className="auth_button w-100"
            onClick={buttonEvent}
          >
            {buttonText}
          </Button>
          {redirectLink && (
            <div className="auth_footer">
              {redirectLinkText}
              <NavLink to={redirectLink} className="link decoration-none px-1">
                {redirectText}
              </NavLink>
            </div>
          )}
          {backToPage && (
            <div className="back_to_auth">
              <BackToPage text="Login" to={ROUTE_CONSTANTS_VARIABLE.LOGIN} />
            </div>
          )}
        </div>
      </div>
      <div className="auth_right-side flex-center-15 flex-column bg-primary-light d-md-none p-50">
        <div className="text-center text-light-black">
          <h4 className="large m-0">{imageTitle}</h4>
          <p>{imageSubTitle}</p>
        </div>
        <div className="text-center w-100">
          <img src={authImage} alt="Login" width={authImageWidth} />
        </div>
      </div>
    </div>
  );
};

AuthTemplate.defaultProps = {
  subTitle: '',
  imageTitle: null,
  imageSubTitle: '',
  buttonEvent: undefined,
  redirectText: '',
  redirectLink: '',
  redirectLinkText: '',
  backToPage: false,
};

export default AuthTemplate;
