import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7H3C2.44772 7 2 7.44772 2 8V12.5858C2 12.851 2.10536 13.1054 2.29289 13.2929L6 17', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.66804 9.32331L6.11094 19.8947C6.05064 21.0391 6.96225 22 8.10817 22H17.8932C19.0391 22 19.9507 21.0392 19.8905 19.8949L19.3341 9.32378C19.1474 5.77592 16.3674 3.00002 13.0011 3C9.63491 2.99998 6.85499 5.77561 6.66804 9.32331Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 7H22C22 12 18.8113 12 18.8113 12', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 17C12 14 14 15 14 12', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M13 3V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Kettle01',
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
            _hoisted5
        ])
    }
})
