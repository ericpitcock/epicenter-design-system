import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.4999 17.5C19.4999 18.8807 18.3806 20 16.9999 20C15.6192 20 14.4999 18.8807 14.4999 17.5C14.4999 16.1193 15.6192 15 16.9999 15C18.3806 15 19.4999 16.1193 19.4999 17.5Z' })
const _hoisted2 = h('path', { 'd': 'M9.49988 17.5C9.49988 18.8807 8.38059 20 6.99988 20C5.61917 20 4.49988 18.8807 4.49988 17.5C4.49988 16.1193 5.61917 15 6.99988 15C8.38059 15 9.49988 16.1193 9.49988 17.5Z' })
const _hoisted3 = h('path', { 'd': 'M14.5001 17.5H9.50008M15.0001 16V5C15.0001 4.44772 14.5524 4 14.0001 4H3.00006C2.44778 4 2.00007 4.44771 2.00006 4.99998L1.99989 16.5C1.99988 17.0523 2.4476 17.5 2.99989 17.5H4.50008M15.0001 6.5H17.9295C18.5982 6.5 19.2227 6.8342 19.5936 7.3906L21.664 10.4962C21.883 10.8247 21.9999 11.2107 21.9999 11.6055L22.0001 17.5H19.4999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6.49988 7.5V11.5M10.4999 7.5V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ContainerTruck02',
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
