# Website Ingaamira

## Nombre del Proyecto
`ng new website-ingaamira-dev --skip-tests`

## Folder Info

  ### Components
  ng g c domains/info/pages/contact --skip-selector --inline-style --skip-tests
  ng g c domains/info/pages/home --skip-selector --inline-style --skip-tests
  ng g c domains/info/pages/not-found --skip-selector --skip-tests
  ng g c domains/info/pages/portfolio --skip-selector --inline-style --skip-tests
  ng g c domains/info/pages/project-card --skip-selector --inline-style --skip-tests
  ng g c domains/info/pages/project-modal --skip-selector --inline-style --skip-tests
  ng g c domains/info/pages/resume --skip-selector --skip-tests


## Folder Shared

  ### Classes
  ng g cl domains/shared/classes/project --flat
  ng g cl domains/shared/classes/tag --flat

  ### Components
  `ng g c domains/shared/components/footer --skip-selector --skip-tests`
  `ng g c domains/shared/components/header --skip-selector --skip-tests`
  `ng g c domains/shared/components/layout --skip-selector --inline-style --skip-tests`
  `ng g c domains/shared/components/navbar --skip-selector --skip-tests`

  ### Interfaces
  ng g i domains/shared/interfaces/menu-item --flat

  ### Modules
  ng g m domains/shared/modules/ngx-bootstrap --flat
  ng g m domains/shared/modules/translation --flat

  ### Services
  ng g s domains/shared/services/projects --flat
  ng g s domains/shared/services/translation --flat
