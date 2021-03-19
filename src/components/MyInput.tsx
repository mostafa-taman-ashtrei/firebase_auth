import React from 'react';
import {
    FormControl, FormLabel, Input as ChakuraInput, Tooltip, WrapItem,
} from '@chakra-ui/react';

interface Inputprops {
    type: string
    placeholder: string
    value: string
    // eslint-disable-next-line no-unused-vars
    setValue: (e: React.ChangeEvent<any>) => void
    // eslint-disable-next-line no-unused-vars
    handleBlur: (e: React.FocusEvent<any>) => void
    error: string | undefined
    id: string
    size: string,
    variant: string,
    label: string
}

const MyInput: React.FC<Inputprops> = ({
    type, placeholder, value, setValue, error, handleBlur, id, size, variant, label,
}: Inputprops) => (
    <FormControl id={id} isRequired>
        <FormLabel>{label}</FormLabel>
        <WrapItem>
            <Tooltip label={error} color="crimson" placement="top" isOpen={!!error}>
                <ChakuraInput
                    placeholder={placeholder}
                    type={type}
                    m={1.5}
                    size={size}
                    variant={variant}
                    value={value}
                    onChange={setValue}
                    onBlur={handleBlur}
                    isInvalid={!!error}
                    errorBorderColor="crimson"
                />
            </Tooltip>
        </WrapItem>
    </FormControl>
);

export default MyInput;
