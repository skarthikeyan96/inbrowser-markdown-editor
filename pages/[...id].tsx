import { useRouter } from "next/router";

const newPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <p> New Page : {id} </p>
    )
}

export default newPage