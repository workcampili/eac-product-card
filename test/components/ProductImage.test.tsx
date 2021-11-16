import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('should show the component with  no Image', () => {
        const wrapper = renderer.create(
            <ProductImage img="http://hola.jpg" className="custom-class" />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should show the component with product title', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }


            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });



});