'use client'
import { useParams } from "next/navigation"

export default function ShowsDetails() {
    const { id } = useParams();
    return <div>Show {id} details</div>
}