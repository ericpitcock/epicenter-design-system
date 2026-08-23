import customProperties from '../../epicenter-styles/dist/custom-properties.json'

/**
 * The acceptance test for the custom-property contract.
 *
 * Properties are set with a plain selector matching the component's own element —
 * no `:deep()`, no `!important`, no out-specifying. If a property does not move the
 * pixel, that is a hole in the contract.
 *
 * Note this must target the element itself, not an ancestor: components declare their
 * defaults on their root class, and a declaration on the element beats an inherited
 * one. See NAMING.md.
 *
 * The list is read from dist/custom-properties.json, so this story cannot drift out
 * of step with the stylesheet.
 */
export default {
  title: 'Style/Custom Properties',
  parameters: {
    docs: {
      description: {
        component:
          'Reads the property API straight from `dist/custom-properties.json`. ' +
          'Use it to confirm a component is fully restylable from the outside.'
      }
    }
  }
}

const GROUP_PROBE = {
  surface: 'rgb(255 0 0)',
  border: 'rgb(0 128 255)',
  text: 'rgb(0 200 0)'
}

/** A value that will visibly change the component, per property group. */
const probeFor = property => {
  if (property.property === 'border-width') return '0.4rem'
  if (property.property === 'border-radius') return '1.2rem'
  if (property.property === 'border-style') return 'dashed'
  return GROUP_PROBE[property.group]
}

const overridable = component =>
  component.properties.filter(property => probeFor(property))

export const Contract = {
  render: () => ({
    setup() {
      const blocks = customProperties.components
        .map(component => ({
          ...component,
          probes: overridable(component)
        }))
        .filter(component => component.probes.length)
        .sort((a, b) => b.probes.length - a.probes.length)

      const total = customProperties.components.reduce(
        (sum, component) => sum + component.properties.length, 0
      )

      return { blocks, total, componentCount: customProperties.components.length }
    },
    template: `
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h2 class="text-style--section">Custom property contract</h2>
          <p>
            {{ componentCount }} components, {{ total }} properties.
            Each row lists the colour, border and radius properties that block exposes.
          </p>
        </div>
        <table class="ep-table">
          <thead>
            <tr><th><div>Block</div></th><th><div>Root class</div></th><th><div>Properties</div></th></tr>
          </thead>
          <tbody>
            <tr v-for="block in blocks" :key="block.block">
              <td>{{ block.block }}</td>
              <td><code>{{ block.class }}</code></td>
              <td>{{ block.probes.length }} / {{ block.properties.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  })
}

/**
 * A worked example: one plain selector retints the whole button, including states
 * that are derived rather than declared.
 */
export const OverrideFromOutside = {
  render: () => ({
    setup() {
      // A stylesheet rule, because that is what a consumer actually writes. It sits
      // outside any cascade layer, so a single class beats the whole library.
      const id = 'contract-demo-style'
      if (!document.getElementById(id)) {
        const style = document.createElement('style')
        style.id = id
        style.textContent = `
          .contract-demo .ep-button {
            --ep-button-bg-color: rebeccapurple;
            --ep-button-border-color: rebeccapurple;
            --ep-button-border-radius: var(--border-radius--full);
            --ep-button-text-color: hsl(var(--gray-0));
          }
        `
        document.head.appendChild(style)
      }
      return {}
    },
    template: `
      <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p>Default</p>
          <div style="display:flex; gap:1rem; margin-top:1rem;">
            <button class="ep-button ep-button-var--primary"><span class="ep-button__label">Primary</span></button>
            <button class="ep-button ep-button-var--secondary"><span class="ep-button__label">Secondary</span></button>
          </div>
        </div>
        <div class="contract-demo">
          <p>
            Under <code>.contract-demo .ep-button</code>, which sets four properties and
            nothing else. Hover the primary button: its hover colour is <em>derived</em>
            from the base colour, so it follows without being set.
          </p>
          <div style="display:flex; gap:1rem; margin-top:1rem;">
            <button class="ep-button ep-button-var--primary"><span class="ep-button__label">Primary</span></button>
            <button class="ep-button ep-button-var--secondary"><span class="ep-button__label">Secondary</span></button>
          </div>
        </div>
      </div>
    `
  })
}
