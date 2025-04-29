import Swal from 'sweetalert2';

export const showToast = (title: string, icon: 'success' | 'error' | 'info' | 'warning') => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};