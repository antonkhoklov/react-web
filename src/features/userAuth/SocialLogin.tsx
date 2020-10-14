import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { observer } from 'mobx-react-lite';
import { Button } from '@material-ui/core';

interface IProps {
    fbCallback: (response: any) => void;
    loading: boolean;
}

const SocialLogin: React.FC<IProps> = ({fbCallback, loading}) => {
    return (
        <div>
            <FacebookLogin 
                appId="765563180921555"
                fiis hereelds="name,email,picture"
                callback={fbCallback}
                render={(renderProps: any) => {
                    return (
                        <Button onClick={renderProps.onClick}>
                            Login with Facebook
                        </Button>
                    )
                } }
            />
        </div>
    )
}

export default observer(SocialLogin)
