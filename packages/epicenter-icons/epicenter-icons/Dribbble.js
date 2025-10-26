import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 13.2644C21.0732 13.0906 20.12 13 19.1472 13C13.7948 13 9.03435 15.7425 6 20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 5C15.8705 8.66742 11.1679 11 5.90962 11C4.56437 11 3.25548 10.8473 2 10.5587', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.6178 22C14.8684 20.786 15 19.5287 15 18.2407C15 11.9247 11.8343 6.34645 7 3', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Dribbble',
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
            _hoisted4
        ])
    }
})
