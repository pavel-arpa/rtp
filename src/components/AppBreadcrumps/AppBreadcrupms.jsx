import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const AppBreadcrupms = ({ breads }) => {
    return (
        <Breadcrumb separator='>' fontWeight={700} color={'#A6ACB3'} margin={'0 auto'} width={'100%'} maxWidth={1540}>
            {breads.map((el, i) => {
                if (i === breads.length - 1) return (
                    <BreadcrumbItem isCurrentPage color={'cBlue.normal'}>
                        <BreadcrumbLink href='#'>{el}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
                return (
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>{el}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}

export default AppBreadcrupms;