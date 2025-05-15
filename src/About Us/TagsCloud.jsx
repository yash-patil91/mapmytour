import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const icons = [
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=12944&format=png&color=000000',
];

const PhysicsCanvas = () => {
    const sceneRef = useRef(null);
    const engine = useRef(Matter.Engine.create());
    const elements = useRef([]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = 400;

        const render = Matter.Render.create({
            element: sceneRef.current,
            engine: engine.current,
            options: {
                width,
                height,
                wireframes: false,
                background: 'transparent',
            },
        });

        const runner = Matter.Runner.create();

        // Boundaries
        const ground = Matter.Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
        const ceiling = Matter.Bodies.rectangle(width / 2, -20, width, 40, { isStatic: true });
        const leftWall = Matter.Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
        const rightWall = Matter.Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

        Matter.World.add(engine.current.world, [ground, ceiling, leftWall, rightWall]);

        // Add draggable icons
        icons.forEach((src, i) => {
            const x = 100 + i * 100;
            const y = 100 + Math.random() * 100;
            const body = Matter.Bodies.circle(x, y, 30, {
                restitution: 0.9,
                friction: 0.01,
            });
            body.render.sprite = {
                texture: src,
                xScale: 0.12,
                yScale: 0.12,
            };
            elements.current.push(body);
        });

        Matter.World.add(engine.current.world, elements.current);

        // Add mouse control
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });

        Matter.World.add(engine.current.world, mouseConstraint);
        render.mouse = mouse;

        Matter.Engine.run(engine.current);
        Matter.Render.run(render);
        Matter.Runner.run(runner, engine.current);

        return () => {
            Matter.Render.stop(render);
            Matter.World.clear(engine.current.world);
            Matter.Engine.clear(engine.current);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return <div ref={sceneRef} style={{ width: '100%', height: '400px', overflow: 'hidden' }} />;
};

export default PhysicsCanvas;
