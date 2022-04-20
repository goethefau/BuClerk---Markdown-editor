import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";
import {insertLink} from "../../plugins/withLinks";

const BcEditorToolbarLink = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = prompt("Enter the url")
        if (url) {
            insertLink(editor, url)
        } else return
    }

    return (
        <MyTooltip title="Link" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled onClick={onClickHandler}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.91406 5.83594C9.75 5.67188 9.55859 5.50781 9.36719 5.37109C9.17578 5.23438 8.95703 5.26172 8.79297 5.39844L8.21875 5.97266C8 6.21875 7.89062 6.51953 7.89062 6.79297C7.89062 6.95703 7.97266 7.06641 8.08203 7.14844C8.16406 7.20312 8.27344 7.28516 8.38281 7.36719C9.14844 8.16016 9.14844 9.39062 8.38281 10.1562L6.52344 11.9883C5.75781 12.7812 4.5 12.7812 3.73438 11.9883C2.96875 11.2227 2.99609 9.96484 3.76172 9.19922L4.11719 8.84375C4.25391 8.73438 4.28125 8.54297 4.22656 8.37891C4.0625 7.91406 3.98047 7.42188 3.95312 6.95703C3.95312 6.57422 3.48828 6.38281 3.21484 6.65625L2.20312 7.66797C0.589844 9.28125 0.589844 11.9336 2.20312 13.5469C3.81641 15.1602 6.46875 15.1602 8.08203 13.5469L9.91406 11.7148C9.91406 11.7148 9.91406 11.7148 9.91406 11.6875C11.5273 10.1016 11.5547 7.47656 9.91406 5.83594ZM13.7695 1.98047C12.1562 0.367188 9.50391 0.367188 7.89062 1.98047L6.05859 3.8125C6.05859 3.8125 6.05859 3.8125 6.05859 3.83984C4.44531 5.42578 4.41797 8.05078 6.05859 9.69141C6.22266 9.85547 6.41406 10.0195 6.60547 10.1562C6.79688 10.293 7.01562 10.2656 7.17969 10.1289L7.75391 9.55469C7.97266 9.30859 8.08203 9.00781 8.08203 8.73438C8.08203 8.57031 8 8.46094 7.89062 8.37891C7.80859 8.32422 7.69922 8.24219 7.58984 8.16016C6.82422 7.36719 6.82422 6.13672 7.58984 5.37109L9.44922 3.53906C10.2148 2.74609 11.4727 2.74609 12.2383 3.53906C13.0039 4.30469 12.9766 5.5625 12.2109 6.32812L11.8555 6.68359C11.7188 6.79297 11.6914 6.98438 11.7461 7.14844C11.9102 7.61328 11.9922 8.10547 12.0195 8.57031C12.0195 8.95312 12.4844 9.14453 12.7578 8.87109L13.7695 7.85938C15.3828 6.24609 15.3828 3.59375 13.7695 1.98047Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarLink;