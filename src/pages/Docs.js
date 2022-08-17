import React from 'react';

export default function Example() {
    return (
        <div className="Example">
            <p className='mb-10'>
                The purpose of this site is to offer a demo and 
                playground for the <a className='link' href="https://www.robijs.dev/">Robi</a> 
                <code className="component">
                    <span className="gray">{"<"}</span>
                    CommandPalette
                    <span className="gray nbs-b">{"/>"}</span>
                </code>
                component.
            </p>
            <div className="alert primary">
                The <strong>docs page</strong> is a work in progress! We appreciate your patience!
            </div>
        </div>
    );
}