'use client';

import { useState } from 'react';
import { TTestResume } from 'src/types';
import Modal from '../Modal';
import { TestResume } from './TestResume';

export const Test = (props: TTestResume) => {
    const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
    return (
        <>
            <button onClick={() => setIsDescriptionOpened(true)} className="relative p-5 border rounded-md shadow-md cursor-pointer dark:border-zinc-600">
                <TestResume {...props} wasHiredClassNames="dark:bg-zinc-800" hrClassNames='dark:border-zinc-600' />
            </button>
            {isDescriptionOpened && (
                <Modal onClickOutside={() => setIsDescriptionOpened(false)}>
                    <div className="relative p-5 bg-white border rounded-md dark:border-zinc-800 dark:bg-zinc-600">
                        <TestResume {...props} wasHiredClassNames="dark:bg-zinc-600" hrClassNames='dark:border-zinc-800' />
                    </div>
                </Modal>
            )}
        </>
    );
};