import React from 'react';

export const withMessages = (ListComponent) => {
    return (props) => {
        const { messagesData, messagesTitle } = props;

        const mappedData = messagesData.map(({ content, sendDate }) => ({ id: sendDate, name: `${content} : ${sendDate}` }));
        return (
            <>
                <ListComponent {...props} />
                {messagesData?.length > 0 && <ListComponent data={mappedData} title={messagesTitle} />}
            </>
        )
    }
}

export const withSubList = (ListComponent) => {
    return (props) => {
        const { subListData, subListTitle } = props;
        return (
            <>
                <ListComponent {...props} />
                {subListData?.length > 0 && <ListComponent data={subListData} title={subListTitle} />}
            </>
        )
    }
}


const List = (props) => {
    const { data, clickItem, title } = props;

    return (
        <ul>
            <h3>{title}:</h3>
            {data.map(({ id, name }) => (
                <div key={id}>
                    {clickItem
                        ? <a href='#' onClick={() => clickItem({ id, name })}>{name}</a>
                        : <li>{name}</li>}
                </div>
            ))}
        </ul>
    );
};

export default List;