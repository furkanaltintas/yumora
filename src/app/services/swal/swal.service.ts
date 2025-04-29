import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SweetAlertIcon, SweetAlertPosition } from './swal.types';
import { defaultSwalConfig } from './swal.config';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor(private router: Router) {}

  // Genel bir uyarı gösterme metodu
  showAlert(
    title: string,
    text: string,
    icon: SweetAlertIcon = 'success',
    position: SweetAlertPosition = 'top-end'
  ) {
    Swal.fire({
      ...defaultSwalConfig,
      title,
      text,
      icon,
      position,
      timer: 5000
    });
  }

  showAlertNoIcon(
    title: string,
    text: string,
    position: SweetAlertPosition = 'top-end'
  ) {
    Swal.fire({
      ...defaultSwalConfig,
      title,
      position,
      showConfirmButton: false,
      showCloseButton: false,
      timer: 5000,
    });
  }

  // Özel SweetAlert
  showAlertWithRedirect(
    title: string,
    confirmButtonText: string,
    routeLinkText: string
  ) {
    Swal.fire({
      ...defaultSwalConfig,
      title,
      position: 'top-end',
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonText,
      timer: 5000,
      preConfirm: () => {
        this.router.navigate([routeLinkText]);
      },
    });
  }

  // Silme işlemi için geri al uyarısı
  showDeleteAlertWithUndo(restoreCallback: () => void) {
    Swal.fire({
      ...defaultSwalConfig,
      title: 'Item removed from your cart',
      position: 'top-end',
      showConfirmButton: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: 'Undo',
      timer: 5000,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        restoreCallback();
      }
    });
  }
}
