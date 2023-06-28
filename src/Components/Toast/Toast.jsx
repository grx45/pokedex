import { useToast } from "@chakra-ui/react";



function Toast(props) {
    const toast = useToast()

    return (
        toast({
            title: props.toast,
            description: props.description,
            status: props.status,
            duration: 2000,
            isClosable: true,
        })
    );
}

export default Toast;