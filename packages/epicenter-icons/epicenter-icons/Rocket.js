import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 20L11 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12L3 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 4C16 4 17.7872 4.76829 18.5 5.5C19.4108 6.30504 20 8 20 10' })
const _hoisted4 = h('path', { 'd': 'M17.9984 6.00098L16.5 7.50043', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 10L13.0711 4.92893C14.9464 3.05357 17.49 2 20.1421 2H22V3.85786C22 6.51003 20.9464 9.05357 19.0711 10.9289L14 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 8H5.82843C5.29799 8 4.78929 8.21071 4.41421 8.58579L2 11L5.31736 12.1058C5.92428 12.3081 6.18777 13.0204 5.85862 13.569L5.40171 14.3305C5.16562 14.724 5.22762 15.2276 5.55209 15.5521L8.44791 18.4479C8.77238 18.7724 9.27603 18.8344 9.66951 18.5983L10.431 18.1414C10.9796 17.8122 11.6919 18.0757 11.8942 18.6826L13 22L15.4142 19.5858C15.7893 19.2107 16 18.702 16 18.1716V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Rocket',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
