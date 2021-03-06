import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
    return (
    <Accordion>
        <Accordion.Frame>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion.Frame>

        <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Btn>Get Started</OptForm.Btn>
        <OptForm.Break />
        </OptForm>
    </Accordion>
    );
}