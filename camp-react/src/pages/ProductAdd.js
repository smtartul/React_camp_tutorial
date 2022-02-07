import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react';
import SametTextInput from '../utilities/customFormControl/SametTextInput';

export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: "",
    }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunludur."),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })
    return <div>
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className='ui form'>
                <SametTextInput
                    placeholder='Ürün adı'
                    name="productName" />

                <SametTextInput
                    placeholder='Ürün fiyatı'
                    name="unitPrice" />
                {/* <FormField>

                    <Field
                        name='productName'
                        placeholder='Ürün adı' />
                    <ErrorMessage
                        name='productName'
                        render={error =>
                            <Label
                                pointing basic color='red'
                                content={error}
                            >

                            </Label>
                        }
                    >

                    </ErrorMessage>
                </FormField>
                <FormField>

                    <Field
                        name='unitPrice'
                        placeholder='Ürün fiyatı' />
                    <ErrorMessage
                        name='unitPrice'
                        render={error =>
                            <Label
                                pointing basic color='red'
                                content={error}
                            >

                            </Label>
                        }
                    >

                    </ErrorMessage>
                </FormField> */}
                <Button type='submit' color='green'>Ekle</Button>
            </Form>
        </Formik>
    </div>;
}
