"use client"
import React from 'react';

import {
    createColumnHelper,
    flexRender, // Helps Us Render the Cell Data Each Cell in a Table
    getCoreRowModel,
    useReactTable
} from '@tanstack/react-table'

import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
} from "@/components/ui/table";

import {useRouter} from "next/navigation";
import {User} from "@/types/User";

type Props = {
    data: User[] | []
}

const CustomTable = ({data}: Props) => {
    const router = useRouter();

    const columnHeadersArray: Array<keyof User> = [
        "name",
        "username",
        "email",
        "phone",
    ]

    const columnHelper = createColumnHelper<User>();

    const columns = columnHeadersArray.map((columnName) => {
        return columnHelper.accessor(columnName, {
            id: columnName,
            header: columnName.toUpperCase() + columnName.slice(1),
        })
    })

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="mt-6 rounded-lg overflow-hidden border border-border">
            <Table className="border">
                <TableHeader>
                    {table.getHeaderGroups().map((header) => {
                        return (
                            <TableHead key={header.id} className="bg-secondary">
                                <div>
                                    {
                                        header.isPlaceholder ? null : flexRender(
                                            header.column.columDef.header,
                                            header.getContext()
                                        )
                                    }
                                </div>
                            </TableHead>
                        )
                    })}
                </TableHeader>
            </Table>
        </div>
    );
}

export default CustomTable;
