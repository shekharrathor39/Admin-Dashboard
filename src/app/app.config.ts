import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { routes } from './app.routes';

export class StaticTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const translations: any = {
      en: {
        WELCOME: 'Welcome', LANGUAGE: 'Language', DASHBOARD: 'Dashboard',
        USERS: 'Users', VIEW: 'View', PRODUCTS: 'Products', 'EMPLOYEE DATA': 'Employee Data',
        FIRST_NAME: 'First Name', LAST_NAME: 'Last Name', EMAIL: 'Email',
        DOB: 'Date of Birth', GENDER: 'Gender', MALE: 'Male', FEMALE: 'Female', OTHER: 'Other',
        EDUCATION: 'Education', COMPANY: 'Company', EXPERIENCE: 'Experience', PACKAGE: 'Package',
        ACTIONS: 'Actions', EDIT: 'Edit', DELETE: 'Delete',
        ADD_EMPLOYEE: 'Add Employee', SAVE: 'Save', CANCEL: 'Cancel', UPDATE: 'Update',
        SEARCH: 'Search', NO_DATA: 'No data found',
        EMPLOYEE_FORM: 'Employee Form', UPDATE_FORM: 'Update Employee',
        FIRST_NAME_PLACEHOLDER: 'Enter first name', LAST_NAME_PLACEHOLDER: 'Enter last name',
        EMAIL_PLACEHOLDER: 'Enter email', COMPANY_PLACEHOLDER: 'Enter company',
        EXPERIENCE_PLACEHOLDER: 'Enter experience', PACKAGE_PLACEHOLDER: 'Enter package',
        IN_RUPEES: 'In Rupees (LPA)', LOGOUT: 'Logout'
      },
      de: {
        WELCOME: 'Willkommen', LANGUAGE: 'Sprache', DASHBOARD: 'Armaturenbrett',
        USERS: 'Benutzer', VIEW: 'Aussicht', PRODUCTS: 'Produkte', 'EMPLOYEE DATA': 'Mitarbeiterdaten',
        FIRST_NAME: 'Vorname', LAST_NAME: 'Nachname', EMAIL: 'E-Mail',
        DOB: 'Geburtsdatum', GENDER: 'Geschlecht', MALE: 'Männlich', FEMALE: 'Weiblich', OTHER: 'Andere',
        EDUCATION: 'Ausbildung', COMPANY: 'Unternehmen', EXPERIENCE: 'Erfahrung', PACKAGE: 'Paket',
        ACTIONS: 'Aktionen', EDIT: 'Bearbeiten', DELETE: 'Löschen',
        ADD_EMPLOYEE: 'Mitarbeiter hinzufügen', SAVE: 'Speichern', CANCEL: 'Abbrechen', UPDATE: 'Aktualisieren',
        SEARCH: 'Suchen', NO_DATA: 'Keine Daten gefunden',
        EMPLOYEE_FORM: 'Mitarbeiterformular', UPDATE_FORM: 'Mitarbeiter aktualisieren',
        FIRST_NAME_PLACEHOLDER: 'Vornamen eingeben', LAST_NAME_PLACEHOLDER: 'Nachnamen eingeben',
        EMAIL_PLACEHOLDER: 'E-Mail eingeben', COMPANY_PLACEHOLDER: 'Unternehmen eingeben',
        EXPERIENCE_PLACEHOLDER: 'Erfahrung eingeben', PACKAGE_PLACEHOLDER: 'Paket eingeben',
        IN_RUPEES: 'In Rupien (LPA)', LOGOUT: 'Abmelden'
      },
      fr: {
        WELCOME: 'Bienvenue', LANGUAGE: 'Langue', DASHBOARD: 'Tableau de bord',
        USERS: 'Utilisateurs', VIEW: 'Vue', PRODUCTS: 'Produits', 'EMPLOYEE DATA': 'Données des employés',
        FIRST_NAME: 'Prénom', LAST_NAME: 'Nom de famille', EMAIL: 'E-mail',
        DOB: 'Date de naissance', GENDER: 'Genre', MALE: 'Homme', FEMALE: 'Femme', OTHER: 'Autre',
        EDUCATION: 'Éducation', COMPANY: 'Entreprise', EXPERIENCE: 'Expérience', PACKAGE: 'Package',
        ACTIONS: 'Actions', EDIT: 'Modifier', DELETE: 'Supprimer',
        ADD_EMPLOYEE: 'Ajouter un employé', SAVE: 'Enregistrer', CANCEL: 'Annuler', UPDATE: 'Mettre à jour',
        SEARCH: 'Rechercher', NO_DATA: 'Aucune donnée trouvée',
        EMPLOYEE_FORM: 'Formulaire employé', UPDATE_FORM: 'Mettre à jour employé',
        FIRST_NAME_PLACEHOLDER: 'Entrer le prénom', LAST_NAME_PLACEHOLDER: 'Entrer le nom',
        EMAIL_PLACEHOLDER: 'Entrer l\'email', COMPANY_PLACEHOLDER: 'Entrer l\'entreprise',
        EXPERIENCE_PLACEHOLDER: 'Entrer l\'expérience', PACKAGE_PLACEHOLDER: 'Entrer le package',
        IN_RUPEES: 'En roupies (LPA)', LOGOUT: 'Déconnexion'
      },
      it: {
        WELCOME: 'Benvenuto', LANGUAGE: 'Lingua', DASHBOARD: 'Pannello',
        USERS: 'Utenti', VIEW: 'Vista', PRODUCTS: 'Prodotti', 'EMPLOYEE DATA': 'Dati dei dipendenti',
        FIRST_NAME: 'Nome', LAST_NAME: 'Cognome', EMAIL: 'Email',
        DOB: 'Data di nascita', GENDER: 'Genere', MALE: 'Maschio', FEMALE: 'Femmina', OTHER: 'Altro',
        EDUCATION: 'Istruzione', COMPANY: 'Azienda', EXPERIENCE: 'Esperienza', PACKAGE: 'Pacchetto',
        ACTIONS: 'Azioni', EDIT: 'Modifica', DELETE: 'Elimina',
        ADD_EMPLOYEE: 'Aggiungi dipendente', SAVE: 'Salva', CANCEL: 'Annulla', UPDATE: 'Aggiorna',
        SEARCH: 'Cerca', NO_DATA: 'Nessun dato trovato',
        EMPLOYEE_FORM: 'Modulo dipendente', UPDATE_FORM: 'Aggiorna dipendente',
        FIRST_NAME_PLACEHOLDER: 'Inserisci nome', LAST_NAME_PLACEHOLDER: 'Inserisci cognome',
        EMAIL_PLACEHOLDER: 'Inserisci email', COMPANY_PLACEHOLDER: 'Inserisci azienda',
        EXPERIENCE_PLACEHOLDER: 'Inserisci esperienza', PACKAGE_PLACEHOLDER: 'Inserisci pacchetto',
        IN_RUPEES: 'In rupie (LPA)', LOGOUT: 'Esci'
      },
      es: {
        WELCOME: 'Bienvenido', LANGUAGE: 'Idioma', DASHBOARD: 'Panel de control',
        USERS: 'Usuarios', VIEW: 'Vista', PRODUCTS: 'Productos', 'EMPLOYEE DATA': 'Datos de empleados',
        FIRST_NAME: 'Nombre', LAST_NAME: 'Apellido', EMAIL: 'Correo electrónico',
        DOB: 'Fecha de nacimiento', GENDER: 'Género', MALE: 'Masculino', FEMALE: 'Femenino', OTHER: 'Otro',
        EDUCATION: 'Educación', COMPANY: 'Empresa', EXPERIENCE: 'Experiencia', PACKAGE: 'Paquete',
        ACTIONS: 'Acciones', EDIT: 'Editar', DELETE: 'Eliminar',
        ADD_EMPLOYEE: 'Agregar empleado', SAVE: 'Guardar', CANCEL: 'Cancelar', UPDATE: 'Actualizar',
        SEARCH: 'Buscar', NO_DATA: 'No se encontraron datos',
        EMPLOYEE_FORM: 'Formulario de empleado', UPDATE_FORM: 'Actualizar empleado',
        FIRST_NAME_PLACEHOLDER: 'Ingrese nombre', LAST_NAME_PLACEHOLDER: 'Ingrese apellido',
        EMAIL_PLACEHOLDER: 'Ingrese correo', COMPANY_PLACEHOLDER: 'Ingrese empresa',
        EXPERIENCE_PLACEHOLDER: 'Ingrese experiencia', PACKAGE_PLACEHOLDER: 'Ingrese paquete',
        IN_RUPEES: 'En rupias (LPA)', LOGOUT: 'Cerrar sesión'
      }
    };
    return of(translations[lang] || translations['en']);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch()),   // ← withFetch fixes CSP issue
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: StaticTranslateLoader
        },
        defaultLanguage: 'en'
      })
    )
  ]
};