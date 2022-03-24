import { Input, Button, Box, Heading, InputGroup } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState} from 'react';
import {SERVER_ENDPOINTS} from '../config';

function URLShortenerForm() {
    const [destination, setDestination] = useState()
    const [shortUrl, setShortUrl] = useState<{
        slug: string;
    } | null>(null);

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        // Prevents page from reloading
        e.preventDefault();
        // Short Url set to null before user inputs in url
        setShortUrl(null);
        const result = await axios
        .post(`${SERVER_ENDPOINTS}/api/url`, {
            destination,
        })
        .then((resp) => resp.data);

        setShortUrl(result);
    }

    return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <Input
                    onChange={(e: any) => setDestination(e.target.value)}
                    placeholder="https://example.com"
                />
                <Button type="submit">Submit</Button>
            </InputGroup>
        </form>
        {shortUrl && (
            <a href={`/${shortUrl?.slug}`}>
                {window.location.origin}/{shortUrl?.slug}
            </a>
        )}
    </Box>
    );
}

export default URLShortenerForm;