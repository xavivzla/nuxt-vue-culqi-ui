import Vue from 'vue'
import 'culqi-ui/dist/culqi-ui.min.css'

<% if (options.components) { %>
  import { <%=options.components.join(',') %> } from 'culqi-ui/dist/components'
  <% options.components.forEach((component) => { %>
    Vue.use(<%=component %>)
    <% }) %>
<% } else { %>
  import VueMaterial from 'culqi-ui'
  Vue.use(VueMaterial)
    <% } %>
