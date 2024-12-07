import React from 'react';

export const BoxForm = ({ addBox }) => {
const [color, setColor] = React.useState('');
const [width, setWidth] = React.useState('');
const [height, setHeight] = React.useState('');

const handleSubmit = (e) => {
    e.preventDefault();
        if (color && width && height) {
        addBox({ color, width: parseInt(width), height: parseInt(height) });
        setColor('');
        setWidth('');
        setHeight('');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter a color"
        className="form-input"
    />
    <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Width (px)"
        className="form-input"
    />
    <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (px)"
        className="form-input"
    />
    <button type="submit" className="submit-button">Add Box</button>
    </form>
);
};

export const BoxDisplay = ({ boxes, removeBox }) => {
return (
    <div className="box-container">
    {boxes.map((box, index) => (
        <div
        key={index}
        className="box"
        style={{
            width: `${box.width}px`,
            height: `${box.height}px`,
            backgroundColor: box.color,
        }}
        >
        <button
            onClick={() => removeBox(index)}
            className="remove-button"
        >
            X
        </button>
        </div>
    ))}
    </div>
);
};
