import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.50896 18.5H5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 11.5V5.5C9.5 3.84315 10.8431 2.5 12.5 2.5H19L15.25 6.25C14.5596 6.94036 14.5596 8.05964 15.25 8.75C15.9404 9.44036 17.0596 9.44036 17.75 8.75L21.5 5V11.5C21.5 13.1569 20.1569 14.5 18.5 14.5H12.5C10.8431 14.5 9.5 13.1569 9.5 11.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wrench01',
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
