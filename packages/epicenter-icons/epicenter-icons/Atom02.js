import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'clip-rule': 'evenodd', 'd': 'M20.3541 3.64593C18.5085 1.8004 13.2722 4.04455 8.65837 8.65837C4.04455 13.2722 1.8004 18.5085 3.64593 20.3541C5.49146 22.1996 10.7278 19.9555 15.3416 15.3416C19.9555 10.7278 22.1996 5.49146 20.3541 3.64593Z', 'fill-rule': 'evenodd', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'clip-rule': 'evenodd', 'd': 'M3.64593 3.64593C1.8004 5.49146 4.04455 10.7278 8.65837 15.3416C13.2722 19.9555 18.5085 22.1996 20.3541 20.3541C22.1996 18.5085 19.9555 13.2722 15.3416 8.65837C10.7278 4.04455 5.49146 1.8004 3.64593 3.64593Z', 'fill-rule': 'evenodd', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.009 12H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Atom02',
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
