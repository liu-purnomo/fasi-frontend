import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

class Alert {
    static default(icon: SweetAlertIcon, title: string, message: string): void {
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }

    static toast(icon: SweetAlertIcon, message: string): void {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: icon,
            title: message,
            padding: '10px 20px',
        });
    }

    static confirmDelete(callback: () => void): void {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                popup: 'sweet-alerts',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
                padding: '2em',
            })
            .then((result: SweetAlertResult) => {
                if (result.value) {
                    callback();
                    swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your data is safe :)', 'error');
                }
            });
    }
}

export default Alert;
