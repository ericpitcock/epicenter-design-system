import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9.2C19 13.9809 13.8979 17.0126 12.4054 17.7971C12.1485 17.9322 11.8515 17.9322 11.5946 17.7971C10.1021 17.0126 5 13.9809 5 9.2C5 5.22355 8.13401 2 12 2C15.866 2 19 5.22355 19 9.2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 19C18 20.6569 15.3137 22 12 22C8.68629 22 6 20.6569 6 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Location05',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
