import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.4301 13C18.7891 13.5166 19 14.1471 19 14.8276C19 16.5796 17.6018 18 15.8771 18C15.5726 18 15.2783 17.9557 15 17.8732M18.9805 10C20.7855 11.0188 22 12.924 22 15.1063C22 18.3613 19.298 21 15.9648 21C14.4472 21 13.0605 20.453 12 19.5499', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '9', 'cy': '10', 'r': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '9', 'cy': '10', 'r': '7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Plate',
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
