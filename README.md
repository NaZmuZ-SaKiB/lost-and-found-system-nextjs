# Lost and Found System Frontend

This is a lost item management frontend project. User can register and manage their profile. User can report found items, lost items, claim a lost item from the reported items, track their claim status and search lost and found items with a robust filterring system. NextJs server side rendering and server actions is heavily used in this project to take the full benefits if NextJs framework. NextJs built-in loading page and ReactJs suspense component is utilized to show loading states.

### [Live Site Link](https://lost-and-found-system-nextjs.vercel.app)

## Technology

1.  NextJs
2.  Jsonwebtoken
3.  React Hook Form
4.  Shadcn UI
5.  Tailwind CSS
6.  Zod
7.  ImgBB
8.  TypeScript

## Run the project in your local mechine

### Requirements

- Node Js (Make sure you have node js installed on your mechine).

### Installation

1. Clone this repo:
   - `git clone https://github.com/NaZmuZ-SaKiB/lost-and-found-system-nextjs.git`
2. Install all necessary dependencies:
   - `lost-and-found-system-nextjs`
   - `npm install` or `yarn`
3. Create a `.env` file in current directory and add following properties:

   - `NEXT_PUBLIC_BACKEND_URL` = backend server url
   - `TOKEN_SECRET` = token secret for jwt
   - `NEXT_PUBLIC_IMGBB_UPLOAD_URL` = imgbb upload url
   - `NEXT_PUBLIC_IMGBB_API_KEY` = imgbb api key

4. Run the development server using following command:
   - `npm run dev` or `yarn dev`
5. To build the project run following command:
   - `npm run build` or `yarn build`
6. To run the build version of the project run following command:

   - `npm run start` or `yarn start`

### Routes

- **/** : Homepage
- **/sign-in** : User login page
- **/sign-up** : User registration page
- **/change-password** : Password update page
- **/my-profile** : User profile page with user's recent claims, lost items and found items. User can also update profile.
- **/my-claims** : User's all claims with pagination
- **/my-found-items** : User's all found items with filtering and paginatoin
- **/my-lost-items** : User's all lost items with filtering and paginatoin
- **/recnt-posts** : Shows recently reported lost and found items
- **/lost-item** : All lost items with filtering and paginatoin
- **/found-item** : All found items with filtering and paginatoin
- **/lost-item/:id** : Single lost item
- **/found-item/:id** : Single found item with claim form and claim requests if the found item is added by logged in user. Then he can approve or reject claim.
- **/report-lost-item** : Create new lost item form
- **/report-found-item** : Create new found item form
- **/admin/dashboard** `Role: 'admin'` : Admin Dashboard
- **/admin/manage-users** `Role: 'admin'` : All users data with serching and pagination. Admin can change user status and role.
- **/admin/category** `Role: 'admin'` : List of all categories and add category form.

### Deployment

1. Build the project.
2. Go to netlify and create an account
3. Select mannual deploy in from the dashboard
4. Upload the dist folder
5. Wait for the build to complete
