import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import s from './AppBreadcrumps.module.sass'
import { nanoid } from "nanoid";

const AppBreadcrupms = ({ breads }) => {
    return (
        <Breadcrumb
            separator='>'
            className={s.breads}
        >
            {breads.map((el, i) => {
                if (i === breads.length - 1) return (
                    <BreadcrumbItem key={nanoid()} isCurrentPage color={'cBlue.normal'}>
                        <BreadcrumbLink href='#'>{el}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
                return (
                    <BreadcrumbItem key={nanoid()}>
                        <BreadcrumbLink href='#'>{el}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}

export default AppBreadcrupms;