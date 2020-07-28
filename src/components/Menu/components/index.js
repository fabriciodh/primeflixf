import React from 'react';

function ButtonLink(props) {
// props => {classname: "nome da classe passada", href: "/"}

    return (
        <a className={props.className} href={props.href}>
        {props.children}
    </a>
    );
}

export default ButtonLink;